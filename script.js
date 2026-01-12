    const nav = document.getElementById("nav");
    const homeBtn = document.getElementById("homeBtn");
    const projects = document.querySelectorAll(".project");

    window.addEventListener("scroll", () => {
        nav.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);

        projects.forEach(p => {
            if (p.getBoundingClientRect().top < window.innerHeight * 0.8) {
                p.classList.add("visible");
            }
        });
    });

    homeBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.querySelectorAll(".album").forEach(album => {
        const track = album.querySelector(".album-track");
        const images = track.children.length;
        let index = 0;

        album.querySelector(".next").onclick = () => {
            index = (index + 1) % images;
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        album.querySelector(".prev").onclick = () => {
            index = (index - 1 + images) % images;
            track.style.transform = `translateX(-${index * 100}%)`;
        };
    });