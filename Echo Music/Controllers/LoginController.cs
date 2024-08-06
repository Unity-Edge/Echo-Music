using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Echo_Music.Models;

namespace Echo_Music.Controllers;
public class LoginController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}