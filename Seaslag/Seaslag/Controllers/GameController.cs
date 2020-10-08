using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Seaslag.Controllers
{
    public class GameController : Controller
    {
        
        public IActionResult GameView()
        {
            return View();
        }
        public IActionResult CreateGameView()
        {
            return View();
        }
        public IActionResult JoinGameView()
        {
            return View();
        }
        public IActionResult LobbyView()
        {
            return View();
        }
        public IActionResult ResultView()
        {
            return View();
        }
    } 
    
}
