// <copyright file="LocationEntity.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace medical_reminder_data_access.Entities
{
    [Table("Locations")]
    public class Location
    {
        [Key]
        public int Id { get; set; }

        public string Administrative { get; set; }

        public string Locality { get; set; }

        public string Address { get; set; }

        public string Region { get; set; }

        public string Registration { get; set; }

        public string Whereabouts { get; set; }

        public string Phone { get; set; }

        public int PatientId { get; set; }

        public Patient Patient { get; set; }
    }
}
