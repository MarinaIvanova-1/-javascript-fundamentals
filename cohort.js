const cohort ={
  name: 'May 2022',
  id: 1234,
  students: ['Jonas', 'Millie', 'Jason']
};

const printer = (object) => {
  console.log(`${object.id} - ${object.name} - ${object.students.length} students in this cohort`);
}

printer(cohort);