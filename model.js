class User {
    constructor(userid, username, password, role, created_at) {
      this.userid = userid;
      this.username = username;
      this.password = password;
      this.role = role;
      this.created_at = created_at;
    }
  }
  
  class Friendship {
    constructor(friendshipID, user1ID, user2ID, status) {
      this.friendshipID = friendshipID;
      this.user1ID = user1ID;
      this.user2ID = user2ID;
      this.status = status;
    }
  }
  
  class Rutine {
    constructor(rutine_id, E1, E2, E3, E4, length) {
      this.rutine_id = rutine_id;
      this.E1 = E1;
      this.E2 = E2;
      this.E3 = E3;
      this.E4 = E4;
      this.length = length;
    }
  }
  
  class Workout {
    constructor(workout_id, user_id, rutine_id, goal_id, sets, begin_date, end_date) {
      this.workout_id = workout_id;
      this.user_id = user_id;
      this.rutine_id = rutine_id;
      this.goal_id = goal_id;
      this.sets = sets;
      this.begin_date = begin_date;
      this.end_date = end_date;
    }
  }
  
  class Excercise {
    constructor(excercise_id, description, sets, length) {
      this.excercise_id = excercise_id;
      this.description = description;
      this.sets = sets;
      this.length = length;
    }
  }
  
  class Goal {
    constructor(goal_id, description, metric) {
      this.goal_id = goal_id;
      this.description = description;
      this.metric = metric;
    }
  }
  
  class Weight {
    constructor(user_id, weight, Date_of_Measure) {
      this.user_id = user_id;
      this.weight = weight;
      this.Date_of_Measure = Date_of_Measure;
    }
  }
  
  class Progress {
    constructor(progress_id, user_id, goal_id, status) {
      this.progress_id = progress_id;
      this.user_id = user_id;
      this.goal_id = goal_id;
      this.status = status;
    }
  }
  
  module.exports = {
    User,
    Friendship,
    Rutine,
    Workout,
    Excercise,
    Goal,
    Weight,
    Progress,
  };
  