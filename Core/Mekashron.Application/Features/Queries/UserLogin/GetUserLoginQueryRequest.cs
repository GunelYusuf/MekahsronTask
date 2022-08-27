using MediatR;

namespace Mekashron.Application.Features.Queries.UserLogin;

public class GetUserLoginQueryRequest:IRequest<GetUserLoginQueryResponse>
{

    public string Username { get; set; }

    public string Password { get; set; }
}

