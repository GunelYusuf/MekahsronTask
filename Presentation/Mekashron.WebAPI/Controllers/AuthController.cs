using MediatR;
using Mekashron.Application.Features.Queries.UserLogin;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mekashron.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    readonly IMediator _mediator;

    public AuthController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> GetUserLogin(GetUserLoginQueryRequest getUserLoginQueryRequest)
    {
        GetUserLoginQueryResponse response = await _mediator.Send(getUserLoginQueryRequest);
        return Ok(response);
    }
}

