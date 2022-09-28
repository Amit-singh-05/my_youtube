// youtube api key == AIzaSyDeLWBNubh2gYVByB2l2Qmuq4vqSOx301E
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=[YOUR_API_KEY]

document.querySelector("#searchbutton").addEventListener("click", async()=>{
    let Search = document.querySelector("#Search").value;
    let data =await getdata(Search)
    append(data)
});

let getdata = async (Search) => {
    
let url  = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${Search}&regionCode=IN&key=AIzaSyDeLWBNubh2gYVByB2l2Qmuq4vqSOx301E`;

let p = await fetch(url);
let data = await p.json()
console.log(data)
return data.items
}

let append = (data)=>{
    let container = document.querySelector("#container");
    container.innerHTML = null;
    data.forEach((elem) => {
        let img =document.createElement("img");
        img.src=elem.snippet.thumbnails.medium.url;

        let h3 =document.createElement("h3");
        h3.innerText=elem.snippet.title;

        let div =document.createElement("div");
        div.onclick=()=>{savedata(elem)};
        div.setAttribute("class","card");
        div.append(img,h3);
        container.append(div);
    });
}

let savedata = (data)=>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href="video.html"
}

let popularvideo = async ()=>{
    let url2  = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&regionCode=IN&key=AIzaSyDeLWBNubh2gYVByB2l2Qmuq4vqSOx301E`;

    let p = await fetch(url2);
    let data2 = await p.json()
    console.log(data2)
    append (data2.items)
}