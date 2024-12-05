require 'mailgun-ruby'

class AssignmentMailer < ApplicationMailer
  def assignment_email(assignment)
    @assignment = assignment

    mg_client = Mailgun::Client.new(ENV.fetch('MAILGUN_API_KEY'))

  html_content = <<-HTML
    <p>Hello #{@assignment.official.name},</p>

    <p>You have been assigned to a new game:</p>

    <p>
      Game: #{@assignment.game.home_team} vs #{@assignment.game.away_team} <br>
      Position: #{@assignment.position}<br>
      Date: #{@assignment.game.date_time}
    </p>

    <p>Best regards,<br>Your Team</p>
        HTML

    message_params = {
      from: 'cybnoreply@gmail.com',
      to: 'growteam2020@gmail.com', #Need to change it to a different email address
      subject: 'New Assignment',
      text: `Hello ${assignment.official.name}, You have been assigned to a new game: Game: ${assignment.game.home_team} vs ${assignment.game.away_team} Position: ${assignment.position} Date: ${assignment.game.date_time} Best regards, Your Team`,
      html: html_content
    }
    result = mg_client.send_message(ENV.fetch('MAILGUN_DOMAIN'), message_params)
  end
end