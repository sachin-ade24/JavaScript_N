//sync vs async

//sync
//1 -- done --> fetch 100 users data from the API/DB -- 20 sec
//2 -- done --> display user profile -- 10 sec
//3 -- done
//4 -- done
//end
//results in blocking users to access the application smoothly

//sync behaviour
console.log("start");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("end");

//async behaviour
//1 -- fetch user data --> 100 users data from the API/DB -- 20 sec
//2 -- display the user profile -- 10 sec
//3 -- order information -- 5 sec
//4 -- do something else

console.log("START");
setTimeout(() => {
  console.log("time out is done");
}, 5000);
console.log("END");
//o/p:
//1 -- START
//2 -- END
//3 -- time out is done
