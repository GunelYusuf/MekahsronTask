using Mekashron.Application.Abstraction.Services;
using Mekashron.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Mekashron.Infrastructure;

public static class ServiceRegistration
{
    public static void AddInfrastructureServices(this IServiceCollection collection)
    {
        collection.AddScoped<IAuthService, AuthService>();
    }
}
