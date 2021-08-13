using System;
using System.Threading.Tasks;
using medical_reminder_data_access.Contexts;
using medical_reminder_data_access.Repositories;
using medical_reminder_data_access.Repositories.Interfaces;

namespace medical_reminder_data_access.UoW
{
    public class UnitOfWork :IUnitOfWork, IDisposable
    {

        private readonly DatabaseContext _context;

        public IVisitRepository Visits { get; private set; }

        public IDiagnosisRepository Diagnosis { get; private set; }

        public ILifeAnamnesisRepository LifeAnamnesis { get; private set; }

        public ILocationRepository Locations { get; private set; }

        public IObservationRepository Observations { get; private set; }

        public IPatientRepository Patients { get; private set; }

        public UnitOfWork(DatabaseContext context)
        {
            _context = context;

            Visits = new VisitRepository(context);
            Diagnosis = new DiagnosisRepository(context);
            LifeAnamnesis = new LifeAnamnesisRepository(context);
            Locations = new LocationRepository(context);
            Observations = new ObservationRepository(context);
            Patients = new PatientRepository(context);
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
