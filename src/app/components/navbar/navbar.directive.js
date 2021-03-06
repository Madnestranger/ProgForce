export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (db) {
    'ngInject';
    this.db = db;
  }
  getWinner() {
    this.users = this.db.getItem('users');
    var randomIndex = Math.floor(Math.random() * (this.users.length));
    this.winner = this.users[randomIndex];
  }
}
