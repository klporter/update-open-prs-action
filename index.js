const core = require('@actions/core');
const issue = require('./issues/issue');
const pull = require('./pulls/pull');
const githubContext = JSON.parse(process.env.GH_CONTEXT)

try {
    console.log(`Repository: ${githubContext.repository}`);
    // const newMilestone = githubContext.event;
    // console.log(`Updating open PRs with new milestone: ${newMilestone}`)
    //
    // pull.getOpenPullRequests().then(openPRs => {
    //     openPRs.forEach(openPR => {
    //         issue.updateIssueWithMilestone(openPR.number, newMilestone)
    //             .then(() => console.log(`Finished adding milestone (${newMilestone}) to PR: ${openPR.title}`))
    //     })
    // });
} catch (error) {
    core.setFailed(error.message);
}