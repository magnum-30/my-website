/* =========================================================
   MAGNUM
   JavaScript
========================================================= */


/* =========================================================
   الجزيئات
========================================================= */

const particlesContainer =
    document.getElementById("particles");

const PARTICLE_COUNT = 22;


function createParticles() {

    if (!particlesContainer) return;

    for (let i = 0; i < PARTICLE_COUNT; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        const size =
            Math.random() * 2.5 + 1.5;

        const left =
            Math.random() * 100;

        const duration =
            Math.random() * 12 + 9;

        const delay =
            Math.random() * -20;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${left}%`;

        particle.style.animationDuration =
            `${duration}s`;

        particle.style.animationDelay =
            `${delay}s`;

        particlesContainer.appendChild(
            particle
        );
    }
}

createParticles();


/* =========================================================
   عداد الزيارات
========================================================= */

const viewCounter =
    document.getElementById("viewCount");


function updateViews() {

    if (!viewCounter) return;

    let views =
        Number(
            localStorage.getItem(
                "magnum_views"
            )
        ) || 0;

    views++;

    localStorage.setItem(
        "magnum_views",
        views
    );

    viewCounter.textContent =
        views.toLocaleString("en-US");
}

updateViews();


/* =========================================================
   ترتيب الحسابات
   عدّل هذه القائمة فقط لتغيير الترتيب
========================================================= */

const ACCOUNT_ORDER = [

    "creators",

    "youtube",

    "tiktok",

    "instagram",

    "kick",

    "twitch",

    "x"

];


/* =========================================================
   تطبيق ترتيب الحسابات
========================================================= */

const accountsContainer =
    document.getElementById("accounts");


function arrangeAccounts() {

    if (!accountsContainer) return;

    const accounts =
        Array.from(
            accountsContainer.querySelectorAll(
                ".account"
            )
        );

    const accountMap =
        new Map();

    accounts.forEach(account => {

        accountMap.set(
            account.dataset.id,
            account
        );

    });


    ACCOUNT_ORDER.forEach(id => {

        const account =
            accountMap.get(id);

        if (account) {

            accountsContainer.appendChild(
                account
            );

        }

    });
}

arrangeAccounts();


/* =========================================================
   تأثير إضاءة البطاقة
========================================================= */

const accountCards =
    document.querySelectorAll(".account");


accountCards.forEach(card => {

    card.addEventListener(
        "pointermove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(0, 145, 255, 0.11),
                    rgba(14, 27, 45, 0.72) 42%,
                    rgba(5, 12, 22, 0.66)
                )
            `;
        }
    );


    card.addEventListener(
        "pointerleave",
        () => {

            card.style.background = "";
        }
    );

});


/* =========================================================
   حركة خفيفة للبروفايل
========================================================= */

const avatarWrapper =
    document.querySelector(
        ".avatar-wrapper"
    );


if (avatarWrapper) {

    document.addEventListener(
        "pointermove",
        event => {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);

            avatarWrapper.style.transform = `
                translate3d(
                    ${x * 4}px,
                    ${y * 4}px,
                    0
                )
            `;
        }
    );


    document.addEventListener(
        "pointerleave",
        () => {

            avatarWrapper.style.transform =
                "";
        }
    );

}


/* =========================================================
   زر القائمة
========================================================= */

const menuButton =
    document.querySelector(
        ".menu-button"
    );


if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "menu-active"
            );

        }
    );

}


/* =========================================================
   منع سحب الصور
========================================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.setAttribute(
            "draggable",
            "false"
        );

    });


/* =========================================================
   تحميل الصفحة
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
