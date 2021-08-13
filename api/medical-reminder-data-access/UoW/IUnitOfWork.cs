using System.Threading.Tasks;
using medical_reminder_data_access.Repositories.Interfaces;

namespace medical_reminder_data_access.UoW
{
    public interface IUnitOfWork
    {
        IVisitRepository Visits { get; }

        IDiagnosisRepository Diagnosis { get; }

        ILifeAnamnesisRepository LifeAnamnesis { get; }

        ILocationRepository Locations { get; }

        IObservationRepository Observations { get; }

        IPatientRepository Patients { get; }

        Task CompleteAsync();
    }
}
