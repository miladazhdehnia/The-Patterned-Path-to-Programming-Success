// Define a chain of team members to handle bugs/issues
class TeamMember {
    constructor(name, expertise, nextMember) {
      this.name = name;
      this.expertise = expertise;
      this.nextMember = nextMember;
    }
  
    handleIssue(issue) {
      if (issue.type === this.expertise) {
        console.log(`${this.name} is handling ${issue.description}`);
        issue.resolved = true;
      } else if (this.nextMember) {
        console.log(`${this.name} cannot handle ${issue.description}, passing it on to ${this.nextMember.name}`);
        this.nextMember.handleIssue(issue);
      } else {
        console.log(`No one in the team can handle ${issue.description}!`);
        issue.resolved = false;
      }
    }
  }
  
  // Context object - the project with its issues
  class Project {
    constructor() {
      this.issues = [
        { description: "UI not responsive", type: "frontend" },
        { description: "Database connection error", type: "backend" },
        { description: "Security vulnerability", type: "security" },
        { description: "Broken functionality", type: "frontend" }
      ];
  
      this.team = new TeamMember("Alice", "frontend", new TeamMember("Bob", "backend", new TeamMember("Charlie", "security", null)));
    }
  
    resolveIssues() {
      this.issues.forEach(issue => {
        console.log(`Handling ${issue.description}`);
        this.team.handleIssue(issue);
        console.log(`Issue resolved: ${issue.resolved}\n`);
      });
    }
  }
  
  // Usage
  const project = new Project();
  project.resolveIssues();