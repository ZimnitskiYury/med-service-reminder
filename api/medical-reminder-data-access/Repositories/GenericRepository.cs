using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using medical_reminder_data_access.Contexts;
using medical_reminder_data_access.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace medical_reminder_data_access.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly DatabaseContext _context;
        private readonly DbSet<T> _dbSet;

        protected GenericRepository(DatabaseContext context)
        {
            this._context = context;
            this._dbSet = context.Set<T>();
        }

        public virtual async Task<T> GetById(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public virtual async Task<T> Add(T entity)
        {
            await _dbSet.AddAsync(entity);
            return entity;
        }

        public virtual bool Delete(int id)
        {
            try
            {
                var exist = _dbSet.Find(id);

                if (exist == null) return false;

                _dbSet.Remove(exist);

                return true;
            }
            catch
            {
                return false;
            }
        }

        public virtual async Task<IEnumerable<T>> All()
        {
            try
            {
                return await _dbSet.ToListAsync();
            }
            catch
            {
                return new List<T>();
            }
        }

        public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.Where(predicate).ToListAsync();
        }

        public virtual bool Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            return _context.Entry(entity)!=null;
        }
    }
}
