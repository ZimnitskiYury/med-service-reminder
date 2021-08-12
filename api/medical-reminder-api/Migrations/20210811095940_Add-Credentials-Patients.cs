// <copyright file="20210811095940_Add-Credentials-Patients.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using Microsoft.EntityFrameworkCore.Migrations;

namespace MedicalReminder.Migrations
{
    public partial class AddCredentialsPatients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Firstname",
                table: "Patients",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lastname",
                table: "Patients",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Middlename",
                table: "Patients",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Firstname",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Lastname",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Middlename",
                table: "Patients");
        }
    }
}
