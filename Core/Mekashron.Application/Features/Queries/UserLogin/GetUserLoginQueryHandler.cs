using System;
using MediatR;
using Mekashron.Application.Abstraction.Services;
using Mekashron.Application.Dtos;

namespace Mekashron.Application.Features.Queries.UserLogin;

public class GetUserLoginQueryHandler : IRequestHandler<GetUserLoginQueryRequest, GetUserLoginQueryResponse>
{
    private readonly IAuthService _authService;

    public GetUserLoginQueryHandler(IAuthService authService)
    {
        _authService = authService;
    }

    public async Task<GetUserLoginQueryResponse> Handle(GetUserLoginQueryRequest request, CancellationToken cancellationToken)
    {
        LoginResponseDto result = await _authService.GetLoginAsync(request.Username, request.Password);


        return new() { loginResponseDto=result };
    }
}

