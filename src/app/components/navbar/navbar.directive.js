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
    this.users = db.getItem('users');
  }
  getWinner() {
    var randomIndex = Math.floor(Math.random() * (this.users.length));
    this.winner = this.users[randomIndex];
  }
}
