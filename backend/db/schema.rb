# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_11_25_150712) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "official_id", null: false
    t.bigint "assigner_id", null: false
    t.string "position"
    t.bigint "game_pay_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assigner_id"], name: "index_assignments_on_assigner_id"
    t.index ["game_id", "official_id"], name: "index_assignments_on_game_id_and_official_id", unique: true
    t.index ["game_id"], name: "index_assignments_on_game_id"
    t.index ["game_pay_id"], name: "index_assignments_on_game_pay_id"
    t.index ["official_id"], name: "index_assignments_on_official_id"
  end

  create_table "associations", force: :cascade do |t|
    t.string "name", null: false
    t.string "sport", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "root_user_id"
    t.index ["root_user_id"], name: "index_associations_on_root_user_id"
  end

  create_table "game_pays", force: :cascade do |t|
    t.string "game_type", null: false
    t.integer "pay_rate", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_type"], name: "index_game_pays_on_game_type", unique: true
  end

  create_table "games", force: :cascade do |t|
    t.bigint "association_id", null: false
    t.string "title", null: false
    t.string "home_team", null: false
    t.string "away_team", null: false
    t.datetime "date_time", precision: nil, null: false
    t.text "location", null: false
    t.string "field"
    t.boolean "officials_assigned", default: false, null: false
    t.string "status", default: "scheduled", null: false
    t.string "game_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["association_id"], name: "index_games_on_association_id"
  end

  create_table "permissions", force: :cascade do |t|
    t.bigint "role_id", null: false
    t.string "action_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id", "action_name"], name: "index_permissions_on_role_id_and_action_name", unique: true
    t.index ["role_id"], name: "index_permissions_on_role_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_roles", force: :cascade do |t|
    t.bigint "role_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id", "user_id"], name: "index_user_roles_on_role_id_and_user_id", unique: true
    t.index ["role_id"], name: "index_user_roles_on_role_id"
    t.index ["user_id"], name: "index_user_roles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.bigint "user_association_id"
    t.string "name", null: false
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.text "address"
    t.string "phone"
    t.text "payment_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_association_id"], name: "index_users_on_user_association_id"
  end

  add_foreign_key "assignments", "game_pays"
  add_foreign_key "assignments", "games"
  add_foreign_key "assignments", "users", column: "assigner_id"
  add_foreign_key "assignments", "users", column: "official_id"
  add_foreign_key "associations", "users", column: "root_user_id"
  add_foreign_key "games", "associations"
  add_foreign_key "permissions", "roles"
  add_foreign_key "user_roles", "roles"
  add_foreign_key "user_roles", "users"
  add_foreign_key "users", "associations", column: "user_association_id"
end
