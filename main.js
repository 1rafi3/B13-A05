async function issues() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    // console.log(data);
    displayIssues(data.data);
}

let count = 1;

function displayIssues(issues) {
    // console.log(issues);
    issues.forEach((issue) => {
        const card = document.createElement("div");
        card.innerHTML = `${issue.status ==="open"?`<div class="card bg-base-100 p-0 bg-white rounded-2xl border-t-4 border-t-[#00A96E]">
                    <div class="p-3 h-72">
                        <figure class="flex justify-between">
                            <img src="./assets/Open-Status.png"/>
                            <div id="priority-btn"></div>
                        </figure>
                        <div class="mt-3">
                            <h2 class="card-title">${issue.title}</h2>
                            <p class="line-clamp-2">${issue.description}
                            </p>
                            <div class="card-actions justify-start mt-3 flex" id="label-buttons">

                            </div>
                        </div>
                    </div>

                    <div class="border-2 border-[#F8FAFC]"></div>

                    <div class=" rounded-2xl p-3 h-22 flex justify-between ">
                        <div>
                            <p>#${count++} ${issue.author}</p>
                            <p>assignee ${issue.assignee}</p>
                        </div>
                        <div>
                            <p>${issue.createdAt.slice(0, 10)}</p>
                            <p>updated: ${issue.updatedAt.slice(0, 10)}</p>
                        </div>
                    </div>
                </div>`:`<div class="card bg-base-100 p-0 bg-white rounded-2xl border-t-4 border-t-[#A855F7]">
                    <div class="p-3 h-72">
                        <figure class="flex justify-between">
                            <img src="./assets/Closed- Status .png"/>
                            <div id="priority-btn"></div>
                        </figure>
                        <div class="mt-3">
                            <h2 class="card-title">${issue.title}</h2>
                            <p class="line-clamp-2">${issue.description}
                            </p>
                            <div class="card-actions justify-start mt-3 flex" id="label-buttons">

                            </div>
                        </div>
                    </div>

                    <div class="border-2 border-[#F8FAFC]"></div>

                    <div class=" rounded-2xl p-3 h-22 flex justify-between ">
                        <div>
                            <p>#${count++} ${issue.author}</p>
                            <p>assignee ${issue.assignee}</p>
                        </div>
                        <div>
                            <p>${issue.createdAt.slice(0, 10)}</p>
                            <p>updated: ${issue.updatedAt.slice(0, 10)}</p>
                        </div>
                    </div>
                </div>`}`

        const labelContainer = card.querySelector("#label-buttons");
        issue.labels.forEach(label => {
            labelContainer.appendChild(labelCheker(label));
        })
        const priorityBtn = card.querySelector("#priority-btn");
        // console.log(priorityBtn)
        const priorityBtnElement = issue.priority;
        // console.log(priorityBtnElement)
        priorityBtn.appendChild(priorityBtnSelector(issue.priority));

        const target = document.getElementById("cards");
        target.appendChild(card);
    })
}

function labelCheker(label) {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-soft", "rounded-4xl");

    if (label === "bug") {
        btn.innerHTML = `<i class="fa-solid fa-bug"></i> BUG`;
        btn.classList.add("btn-secondary");
    } else if (label === "help wanted") {
        btn.innerHTML = `<i class="fa-brands fa-hire-a-helper"></i> HELP WANTED`;
        btn.classList.add("btn-warning");
    } else if (label === "enhancement") {
        btn.innerHTML = `<i class="fa-solid fa-star" style="color: rgb(0, 169, 110);"></i> ENHANCEMENT`;
        btn.classList.add("btn-success");
    }
    else if (label === "documentation") {
        btn.innerHTML = `<i class="fa-brands fa-readme" style="color: rgb(80, 94, 190);"></i> Documentation`;
        btn.classList.add("btn-primary");
    }
    else if (label === "good first issue") {
        btn.innerHTML = `<i class="fa-solid fa-thumbs-up" style="color: rgb(80, 142, 190);"></i> GOOD FIRST ISSUE`;
        btn.classList.add("btn-info");
    }

    return btn;
}



function priorityBtnSelector(priority){
    const btn = document.createElement("button");
    btn.classList.add("btn","btn-soft","rounded-4xl");
    if(priority==="high"){
        btn.innerHTML = `HIGH`;
        btn.classList.add("btn-secondary")
    }else if(priority==="medium"){  
        btn.innerHTML = `Medium`;
        btn.classList.add("btn-warning")
    }else if(priority ==="low"){
        btn.innerHTML = `LOW`;
        btn.classList.add("default")
    }
    return btn;
}


issues();