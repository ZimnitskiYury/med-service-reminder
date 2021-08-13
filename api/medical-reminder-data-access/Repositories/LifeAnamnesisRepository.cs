using medical_reminder_data_access.Contexts;
using medical_reminder_data_access.Entities;
using medical_reminder_data_access.Repositories.Interfaces;

namespace medical_reminder_data_access.Repositories
{
    class LifeAnamnesisRepository : GenericRepository<LifeAnamnesis>, ILifeAnamnesisRepository
    {
        public LifeAnamnesisRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
