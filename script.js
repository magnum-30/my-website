const toast =
    document.getElementById("toast");

const particlesContainer =
    document.getElementById("particles");


// ========================================
// نقاط الخلفية
// ========================================

const particleCount = 22;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("span");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 7) + "s";

    const size =
        Math.random() > 0.8
            ? 3
            : 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particlesContainer.appendChild(
        particle
    );
}


// ========================================
// روابط الحسابات
// ========================================

document
    .querySelectorAll(".account")
    .forEach(account => {

        account.addEventListener(
            "click",
            event => {

                const link =
                    account.getAttribute("href");

                if (
                    !link ||
                    link === "#"
                ) {

                    event.preventDefault();

                    const name =
                        account.dataset.name;

                    showToast(
                        "أضف رابط حساب " +
                        name
                    );
                }

            }
        );

    });


// ========================================
// Toast
// ========================================

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );
}


// ========================================
// حركة الإضاءة داخل الشريط
// ========================================

document
    .querySelectorAll(".account")
    .forEach(account => {

        account.addEventListener(
            "pointermove",
            event => {

                const rect =
                    account.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const percentage =
                    (x / rect.width) * 100;

                account.style.background =

                    `linear-gradient(
                        110deg,
                        rgba(255,255,255,0.075),
                        rgba(255,255,255,0.018) ${percentage}%,
                        rgba(255,255,255,0.035)
                    )`;
            }
        );


        account.addEventListener(
            "pointerleave",
            () => {

                account.style.background =
                    "";
            }
        );

    });


// ========================================
// حركة صورة البروفايل
// ========================================

const profile =
    document.querySelector(
        ".profile"
    );

const profileWrapper =
    document.querySelector(
        ".profile-wrapper"
    );


profile.addEventListener(
    "pointermove",
    event => {

        const rect =
            profile.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        profileWrapper.style.transform =

            `translate(
                ${x * 5}px,
                ${y * 5}px
            )`;
    }
);


profile.addEventListener(
    "pointerleave",
    () => {

        profileWrapper.style.transform =
            "";
    }
);



// ==================================================
// ⭐ ترتيب الحسابات
// ==================================================
//
// غيّر ترتيب الأسماء هنا فقط.
//
// الأسماء المتاحة:
//
// creators
// youtube
// tiktok
// instagram
// kick
// twitch
// x
//
// مثال:
//
// creators
// youtube
// tiktok
// instagram
// kick
// twitch
// x
//
// إذا أردت Twitch أول شيء:
//
// twitch
// creators
// youtube
// tiktok
// instagram
// kick
// x
//
// ==================================================


const ACCOUNT_ORDER = [

    "creators",

    "tiktok",

    "youtube",

    "kick",

    "twitch",

    "x",

    "instagram"

];


// ========================================
// تطبيق الترتيب تلقائيًا
// ========================================

const accountsContainer =
    document.getElementById(
        "accounts"
    );

const accountElements =
    Array.from(
        accountsContainer.querySelectorAll(
            ".account"
        )
    );


const accountMap =
    new Map();


accountElements.forEach(
    account => {

        accountMap.set(
            account.dataset.id,
            account
        );

    }
);


// إعادة ترتيب البطاقات

ACCOUNT_ORDER.forEach(
    id => {

        const account =
            accountMap.get(id);

        if (account) {

            accountsContainer.appendChild(
                account
            );

        }

    }
);