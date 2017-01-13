export class MainController {
  constructor (db, $scope) {
    'ngInject';
    this.db = db;
    this.$scope = $scope;
    this.options = {
      maxDate: new Date(),
      showWeeks: false
    };
    this.users = db.getItem('users');
    if (!this.users) {
      var users = [{
        name: 'Vasiliy',
        surname: 'Pupkin',
        email: 'vasia@gmail.com',
        phone: '123456789012',
        date: new Date('01/01/2001'),
        id: '0'
      }];
      this.users = users;
      db.setItem('users', users);
    }
  }

  updateDb() {
    this.db.setItem('users', this.users);
  }

  handleUserClick(user) {
    this.editUser = user;
  }

  addUser(user) {
    user.id = (this.users.length + 1).toString();
    this.users.push(user);
    this.updateDb();
    this.$scope.registrationForm.$setPristine();
    $("#registrationModal").modal('hide');
  }
}
