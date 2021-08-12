// <copyright file="20210811104206_Add-Life-Anamnesis.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MedicalReminder.Migrations
{
    public partial class AddLifeAnamnesis : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LifeAnamnesis",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Heredity = table.Column<bool>(type: "boolean", nullable: false),
                    Military = table.Column<bool>(type: "boolean", nullable: false),
                    Education = table.Column<int>(type: "integer", nullable: false),
                    Disability = table.Column<int>(type: "integer", nullable: false),
                    Family = table.Column<int>(type: "integer", nullable: false),
                    Work = table.Column<string>(type: "text", nullable: true),
                    Childrens = table.Column<bool>(type: "boolean", nullable: false),
                    DriveLicense = table.Column<int>(type: "integer", nullable: false),
                    Conviction = table.Column<bool>(type: "boolean", nullable: false),
                    Offences = table.Column<bool>(type: "boolean", nullable: false),
                    Profession = table.Column<string>(type: "text", nullable: true),
                    Position = table.Column<string>(type: "text", nullable: true),
                    SpecialStatus = table.Column<string>(type: "text", nullable: true),
                    PatientId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LifeAnamnesis", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LifeAnamnesis_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LifeAnamnesis_PatientId",
                table: "LifeAnamnesis",
                column: "PatientId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LifeAnamnesis");
        }
    }
}
