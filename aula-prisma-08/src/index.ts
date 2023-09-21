import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    orderBy: {
      _count: {
        id: "desc" // Ordenar por COUNT(id) em ordem decrescente
      }
    }
  });

  // Processar o resultado
  students.forEach((student) => {
    console.log(`Turma ${student.class}: ${student._count.id} alunos`);
  });
})();

(async () => {
  const studentsWithoutJob = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    where: {
      jobId: null // Filtrar estudantes que não têm trabalho
    },
    orderBy: {
      _count: {
        id: "desc" // Ordenar por COUNT(id) em ordem decrescente
      }
    }
  });
  
  // Processar o resultado
  studentsWithoutJob.forEach((student) => {
    console.log(`Turma ${student.class}: ${student._count.id} alunos sem emprego`);
  });
  
})();
