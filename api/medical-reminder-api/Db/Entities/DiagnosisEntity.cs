// <copyright file="DiagnosisEntity.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalReminder.Db.Entities
{
    [Table("Diagnoses")]
    public class DiagnosisEntity
    {
        [Key]
        public int Id { get; set; }

        public DiagnosisType Type { get; set; }

        public string Diagnosis { get; set; }

        public int PatientId { get; set; }

        public PatientEntity Patient { get; set; }
    }
}
