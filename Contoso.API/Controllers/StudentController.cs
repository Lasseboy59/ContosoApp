using System;
using System.Collections.Generic;
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
        public Student PostStudent(Student student)
        {
            
            ContosoContext context = new ContosoContext();
            context.Students.Add(student);
            context.SaveChanges();
            
            return student;
        }
    }
}
