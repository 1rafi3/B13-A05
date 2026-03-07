async function issues() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    // console.log(data);
    displayIssues(data.data);
}

function displayIssues(issues){
    // console.log(issues);
    issues.forEach((issue)=>{
        const card = document.createElement("div");
        card.innerHTML = `<div class="card bg-base-100 p-0 bg-white border-t-4 border-t-[#00A96E]">
                    <div class="p-3">
                        <figure class="flex justify-between">
                            <img src="./assets/Open-Status.png" alt="Shoes" />
                            <button class="btn btn-soft btn-secondary rounded-4xl">High</button>
                        </figure>
                        <div class="mt-3">
                            <h2 class="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions
                                parts
                            </p>
                            <div class="card-actions justify-start mt-3">
                                <button class="btn btn-soft btn-secondary rounded-4xl">High</button>
                                <button class="btn btn-soft btn-secondary rounded-4xl">High</button>
                            </div>
                        </div>
                    </div>

                    <div class="border-2 border-[#F8FAFC]"></div>

                    <div class="bg-white p-3 flex flex-col min-h-20 rounded-2xl">
                        <p>${issue.labels[0] ? issue.labels[0] : ""}</p>
                        <p>${issue.labels[1] ? issue.labels[1] : ""}</p>
                    </div>
                </div>`
        const target = document.getElementById("cards");
        target.appendChild(card);
    })
}

issues();