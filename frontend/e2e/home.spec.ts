import { test, expect } from "@playwright/test";

test.describe("Home Page E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Forzamos un tamaño de escritorio para asegurar que el NavBar (lg:block) sea visible
    await page.setViewportSize({ width: 1280, height: 800 });
    // Navegamos a la raíz con un timeout generoso
    await page.goto("/", { waitUntil: "load", timeout: 60000 });
  });

  test("debería cargar la página principal y tener el título correcto", async ({
    page,
  }) => {
    // El título real es "Ángel Matos"
    await expect(page).toHaveTitle(/Ángel Matos/i);

    // Verificamos el nombre en el Hero
    const nameHeading = page.getByText(/Ángel Matos/i).first();
    await expect(nameHeading).toBeVisible();
  });

  test("debería mostrar la sección de proyectos con datos del backend", async ({
    page,
  }) => {
    // Verificamos el título de la sección
    await expect(page.getByText(/Proyectos Recientes/i)).toBeVisible();

    // El componente Projects tiene id="projects"
    const projectsSection = page.locator("#projects");
    await expect(projectsSection).toBeVisible();
  });

  test("navbar: debería navegar a la sección de experiencia", async ({
    page,
  }) => {
    // Buscamos el link de Experience en el nav
    const experienceLink = page
      .locator("nav")
      .getByRole("link", { name: /experience/i });
    await expect(experienceLink).toBeVisible();

    await experienceLink.click();

    // Verificamos que la URL contenga el hash
    await expect(page).toHaveURL(/.*#experience/);

    // Damos un momento para el scroll
    await page.waitForTimeout(1000);

    // Verificamos que la sección sea visible en el viewport
    const experienceSection = page.locator("#experience");
    await expect(experienceSection).toBeInViewport();
  });

  test("navbar: debería navegar a la sección de proyectos", async ({
    page,
  }) => {
    // Buscamos el link de Projects en el nav
    const projectsLink = page
      .locator("nav")
      .getByRole("link", { name: /projects/i });
    await expect(projectsLink).toBeVisible();

    await projectsLink.click();

    await expect(page).toHaveURL(/.*#projects/);

    await page.waitForTimeout(1000);

    const projectsSection = page.locator("#projects");
    await expect(projectsSection).toBeInViewport();
  });
});
