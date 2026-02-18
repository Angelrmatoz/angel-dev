import { repoResolvers } from "../src/graphql/resolvers/repo.js";
import * as githubServices from "../src/services/github.services.js";

// Mockeamos el servicio de GitHub
jest.mock("../src/services/github.services.js");

describe("Repo Resolvers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debería retornar repositorios pinnados correctamente", async () => {
    const mockRepos = [
      { name: "pinned-repo", owner: "angel", url: "http://github.com/1" },
    ];
    (githubServices.getPinnedRepos as jest.Mock).mockResolvedValue(mockRepos);

    const result = await repoResolvers.Query.pinnedRepos(null, {
      username: "angel",
    });

    expect(result).toEqual(mockRepos);
    expect(result[0].owner).toBe("angel");
  });

  it("debería retornar los 10 repositorios más recientes", async () => {
    const mockRecentRepos = Array(10)
      .fill(null)
      .map((_, i) => ({
        name: `recent-repo-${i}`,
        owner: "angel",
        url: `http://github.com/recent-${i}`,
      }));

    (githubServices.getRecentRepos as jest.Mock).mockResolvedValue(
      mockRecentRepos,
    );

    const result = await repoResolvers.Query.recentRepos(null, {
      username: "angel",
    });

    expect(result).toHaveLength(10);
    expect(result[0].name).toBe("recent-repo-0");
    expect(result[0].owner).toBe("angel"); // Verificamos la propiedad owner
  });

  it("debería mostrar el nombre de usuario del creador del repositorio (owner)", async () => {
    const mockRepos = [
      { name: "cool-project", owner: "angelrmatoz", url: "..." },
    ];
    (githubServices.getPinnedRepos as jest.Mock).mockResolvedValue(mockRepos);

    const result = await repoResolvers.Query.pinnedRepos(null, {
      username: "angelrmatoz",
    });

    expect(result[0].owner).toBe("angelrmatoz");
  });
});
