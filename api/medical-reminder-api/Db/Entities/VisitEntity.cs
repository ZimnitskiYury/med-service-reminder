using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MedicalReminder.Db.Entities
{
    [Table("Visits")]
    public class VisitEntity
    {
        [Key]
        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public int ControlPeriod { get; set; }

        public DateTime NextVisitDate { get; set; }

        public int PatienId { get; set; }

        public PatientEntity Patient { get; set; }
    }
}
