describe("To-do list", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays a prompt by default", () => {
    cy.getBySel("prompt")
      .should("exist")
      .should("have.text", "Add some tasks...");
  });

  it("Can add new tasks", () => {
    const newTask = "Walk the dogs";
    cy.getBySel("new-task").type(`${newTask}{enter}`);
    cy.getBySel("prompt").should("not.exist");
    cy.getBySel("task")
      .should("have.length", 1)
      .last()
      .should("have.text", newTask);
  });

  context("With an existing task", () => {
    beforeEach(() => {
      const newTask = "Feed the ducks";
      cy.getBySel("new-task").type(`${newTask}{enter}`);
    });

    it("Can edit a task", () => {
      const task = "Feed the ducks";
      cy.contains(task).parent().find("[data-cy='task-edit']").click();
      cy.getBySel("new-task")
        .should("have.value", task)
        .type("{backspace}z{enter}");
      cy.getBySel("task")
        .should("have.length", 1)
        .last()
        .should("have.text", "Feed the duckz");
    });

    it("Can check off a task as completed", () => {
      cy.contains("Feed the ducks")
        .find("[data-cy='task-checkbox']")
        .check()
        .should("be.checked");
    });

    it("Can delete a task", () => {
      const task = "Feed the ducks";
      cy.contains(task).parent().find("[data-cy='task-delete']").click();
      cy.contains(task).should("not.exist");
    });

    it("Can cancel task deletion", () => {
      const task = "Feed the ducks";
      cy.contains(task).parent().find("[data-cy='task-delete']").click();
      cy.on("window:confirm", () => false);
      cy.contains(task).should("exist");
    });
  });
});
