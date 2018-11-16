using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Contoso.Data;
using Contoso.Domain;
using Console = System.Console;

namespace Contoso.API.Controllers
{
    public class StudentController : ApiController
    {
        private ContosoContext _context;

        public List<Student> GetStudents()
        {
            _context = new ContosoContext();
            return _context.Students.ToList();
        }

        public Student GetStudentById(int id)
        {
            _context = new ContosoContext();
            return _context.Students.Find(id);
        }

        public Student PostStudent(Student student)
        {
            _context = new ContosoContext();
            _context.Students.Add(student);
            _context.SaveChanges();

            return student;
        }

        public Student PutStudent(Student student)
        {
            _context = new ContosoContext();
            _context.Entry(student).State = EntityState.Modified;
            _context.SaveChanges();
            return student;
        }

        public void DeleteStudent(int id)
        {
            _context = new ContosoContext();
            var student = _context.Students.Find(id);
            _context.Students.Remove(student);
            _context.SaveChanges();

        }
    }
}