'use strict';

var teachers_list = [];

var Teacher = function(teacher){
this.image = teacher.image;
this.name = teacher.name;
this.subjects = teacher.subjects;
this.teacher_id = teacher.teacher_id;
};

Teacher.prototype.toHtml = function(){
var source = $('#teacher-template').text();
var template = Handlebars.compile(source);
return template(this);
};

teachers.forEach(function(teacher){
teachers_list.push(new Teacher(teacher));
});


teachers_list.forEach(function(teacher){
$('#teacher-listings').append(teacher.toHtml());
});