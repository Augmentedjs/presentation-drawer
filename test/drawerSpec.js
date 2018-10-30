describe('Define Drawer component', () => {
  it('is defined', () => {
      expect(Drawer).to.not.be.undefined;
  });

  it('creates a view', () => {
      const view = new Drawer();
      expect(view).to.not.be.undefined;
  });

  it('creates a view in HTML', () => {
    const view = new Drawer();
    expect(view.render()).to.not.be.undefined;
  })

});
