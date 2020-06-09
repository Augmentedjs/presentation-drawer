describe("Define Drawer component", () => {
  it("is defined", () => {
    expect(Drawer.DrawerView).to.not.be.undefined;
  });

  it("creates a view", () => {
    const view = new Drawer.DrawerView();
    expect(view).to.not.be.undefined;
  });

  it("creates a view in HTML", async () => {
    const view = new Drawer.DrawerView({ "el": "#main", "content": "<h1>Hello</h1>", "drawer": "<p>Is it me your are looking for?</p>"});
    await view.render();
    const el = await document.querySelector(view.el);
    const html = el.innerHTML;
    console.debug(html);
    expect(html).to.not.be.undefined;
  });
});
