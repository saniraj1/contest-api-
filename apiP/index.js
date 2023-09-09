let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((value) => {
    return value.json();
  })
  .then((contest) => {
    console.log(contest);
    ihtml = "";
    for (items in contest) {
      console.log(contest[items]);
      ihtml += `<div id="card mx-2 my-4" class="card" style="width: 22rem">
      <img src="https://source.unsplash.com/random/900×700/?coding" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${contest[items].name}</h5>
        <p class="card-text"><a href="${contest[items].url}"> Visit here</a>
        </p>
        <p class="card-text">starts at: ${contest[items].start_time}
        </p>
        <p class="card-text">ends at: ${contest[items].end_time}
        </p>
        <a href="${contest[items].url}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    }
    cardcontainer.innerHTML = ihtml;
  });
