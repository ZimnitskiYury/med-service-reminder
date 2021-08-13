using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace medical_reminder_data_access.Entities
{
    [Table("Visits")]
    public class Visit
    {
        [Key]
        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public int ControlPeriod { get; set; }

        public DateTime NextVisitDate { get; set; }

        public int PatientId { get; set; }

        public Patient Patient { get; set; }
    }
}
