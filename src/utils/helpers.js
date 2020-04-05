const formatResultsData = (question, authedUser) => {
  const userChoice = question.optionOne.votes.includes(authedUser)
    ? "optionOne"
    : "optionTwo";

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const optOneP = (optionOneVotes / totalVotes) * 100;
  const optTwoP = (optionTwoVotes / totalVotes) * 100;

  return {
    userChoice,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    optOneP,
    optTwoP,
  };
};

export { formatResultsData };
