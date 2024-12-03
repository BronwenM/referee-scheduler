import React, { useState, useEffect } from 'react';
import { Table, useTable } from 'ka-table';
import { DataType, EditingMode } from 'ka-table/enums';
import { getValueByColumn } from 'ka-table/Utils/DataUtils';
import useGameData from '../../hooks/useGameData';
import 'ka-table/style.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import Button from '../Button/Button';
import axios from 'axios';
import './ReportPage.scss';
import { toast } from 'react-toastify';

const ReportPage = () => {
  const { games, error } = useGameData();
  const [tableData, setTableData] = useState([]);
  const table = useTable();

  useEffect(() => {
    if (games.length > 0) {
      const formattedData = games.map(game => ({
        ...game,
        date_time: new Date(game.date_time).toLocaleString(), // 
        created_at: new Date(game.created_at).toLocaleString(),
        updated_at: new Date(game.updated_at).toLocaleString(),
      }));
      setTableData(formattedData);
    }
  }, [games]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns = [
    { key: 'title', title: 'Title', dataType: DataType.String },
    { key: 'home_team', title: 'Home Team', dataType: DataType.String },
    { key: 'away_team', title: 'Away Team', dataType: DataType.String },
    { key: 'date_time', title: 'Date and Time', dataType: DataType.Date },
    { key: 'location', title: 'Location', dataType: DataType.String },
    { key: 'field', title: 'Field', dataType: DataType.String },
    { key: 'officials_assigned', title: 'Officials Assigned', dataType: DataType.Boolean },
    { key: 'status', title: 'Status', dataType: DataType.String },
    { key: 'game_type', title: 'Game Type', dataType: DataType.String },
    { key: 'created_at', title: 'Created At', dataType: DataType.Date },
    { key: 'updated_at', title: 'Updated At', dataType: DataType.Date },
  ];

  const handleSave = async () => {
    try {
      const updatedGames = tableData.map(async (game) => {
        const response = await axios.patch(`/api/games/${game.id}`, game, { withCredentials: true });
        return response.data;
      });
      await Promise.all(updatedGames);
      toast.success('Data saved successfully!');
      console.log('Updated data:', tableData);
    } catch (error) {
      toast.error('Failed to save edits.');
      console.error('Failed to save data:', error);
    }
  };

  const exportData = (type, orientation = 'portrait') => {
    const head = [columns.map(col => col.title)];
    const body = tableData.map(row => columns.map(col => getValueByColumn(row, col)));

    if (type === 'pdf') {
      const doc = new jsPDF(orientation);
      doc.autoTable({
        margin: 1,
        headStyles: { fillColor: '#F1F5F7', textColor: '#747D86' },
        alternateRowStyles: { fillColor: '#F9FBFC' },
        head,
        body,
      });
      doc.save('games_report.pdf');
    } else if (type === 'csv') {
      return [head, ...body];
    }
  };

  const handleCellChange = (columnKey, rowKeyValue, value) => {
    setTableData(prevData =>
      prevData.map(row =>
        row.id === rowKeyValue ? { ...row, [columnKey]: value } : row
      )
    );
  };

  const renderCellEditor = ({ column, rowKeyValue, value }) => {
    const commonProps = {
      value: value === true ? 'true' : value === false ? 'false' : value || '',
      onChange: (event) => {
        const newValue = column.dataType === DataType.Boolean
          ? event.target.value === 'true'
          : event.target.value;
        handleCellChange(column.key, rowKeyValue, newValue);
      },
      onBlur: () => table.closeEditor(rowKeyValue, column.key),
      autoFocus: true,
    };

    if (column.key === 'date_time') {
      return (
        <input
          type="datetime-local"
          {...commonProps}
          value={value || ''}
          onChange={(event) => handleCellChange(column.key, rowKeyValue, event.target.value)}
        />
      );
    }

    return column.dataType === DataType.Boolean ? (
      <select className='form-control' {...commonProps}>
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>
    ) : (
      <input type="text" {...commonProps} onKeyDown={(event) => {
        if (event.key === 'Enter') {
          table.closeEditor(rowKeyValue, column.key);
        }
      }} />
    );
  };

  return (
    <div>
      <h1>Reports</h1>
      <h2>All Games</h2>
      <Button handle={() => exportData('pdf')} name="Export to PDF" className="primary" />
      <Button handle={() => exportData('pdf', 'landscape')} name="Export to PDF (Landscape)" className="primary" />
      <CSVLink data={exportData('csv')} filename="games_report.csv">
        <Button handle={null} name="Export to CSV" className="primary" />
      </CSVLink>
      {games.length === 0 ? (
        <p>No games available</p>
      ) : (
        <>
          <Table 
            table={table}
            columns={columns}
            data={tableData}
            editingMode={EditingMode.Cell}
            rowKeyField="id"
            childComponents={{
              cellEditor: {
                content: renderCellEditor,
              },
            }}
          />
          <Button handle={handleSave} name="Save Changes" className="primary" />
        </>
      )}
    </div>
  );
};

export default ReportPage;