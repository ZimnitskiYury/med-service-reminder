using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MedicalReminder.Migrations
{
    public partial class AddVisits : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Visits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VisitDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    ControlPeriod = table.Column<int>(type: "integer", nullable: false),
                    NextVisitDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    PatienId = table.Column<int>(type: "integer", nullable: false),
                    PatientId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Visits_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Visits_PatientId",
                table: "Visits",
                column: "PatientId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Visits");
        }
    }
}
