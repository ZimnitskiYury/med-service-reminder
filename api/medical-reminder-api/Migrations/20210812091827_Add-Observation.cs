using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MedicalReminder.Migrations
{
    public partial class AddObservation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Observations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Registration = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Deregistration = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Group = table.Column<int>(type: "integer", nullable: false),
                    Examination = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Reason = table.Column<string>(type: "text", nullable: true),
                    PatientId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Observations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Observations_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Observations_PatientId",
                table: "Observations",
                column: "PatientId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Observations");
        }
    }
}
