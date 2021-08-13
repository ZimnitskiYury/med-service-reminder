using medical_reminder_data_access.Contexts;
using medical_reminder_data_access.Entities;
using medical_reminder_data_access.Repositories.Interfaces;

namespace medical_reminder_data_access.Repositories
{
    class DiagnosisRepository : GenericRepository<Diagnosis>, IDiagnosisRepository
    {
        public DiagnosisRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
