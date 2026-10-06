// ============================================
// الجزيئات الزرقاء
// ============================================

const particlesContainer =
    document.getElementById("particles");


const particleCount = 24;


for (
    let i = 0;
    i < particleCount;
    i++
) {

    const particle =
        document.createElement("span");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        (-Math.random() * 12) + "s";

    particle.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    particle.style.opacity =
        0.3 + Math.random() * 0.5;

    particlesContainer.appendChild(
        particle
    );
}



// ============================================
// عداد الزيارات
// ============================================
//
// هذا العداد محلي على الجهاز.
// يعني كل متصفح يحفظ عداده الخاص.
// ============================================

const viewElement =
    document.getElementById(
        "viewCount"
    );


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


viewElement.textContent =
    views;



// ============================================
// حركة بطاقات الحسابات
// ============================================

const accounts =
    document.querySelectorAll(
        ".account"
    );


accounts.forEach(
    account => {


        account.addEventListener(
            "pointermove",
            event => {

                const rect =
                    account.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const percentX =
                    (x / rect.width) * 100;

                const percentY =
                    (y / rect.height) * 100;


                account.style.background =

                    `
                    radial-gradient(
                        circle at
                        ${percentX}%
                        ${percentY}%,
                        rgba(
                            0,
                            145,
                            255,
                            0.12
                        ),
                        rgba(
                            13,
                            23,
                            39,
                            0.72
                        ) 55%
                    )
                    `;
            }
        );


        account.addEventListener(
            "pointerleave",
            () => {

                account.style.background =
                    "";
            }
        );

    }
);



// ============================================
// ترتيب الحسابات
// ============================================
//
// غيّر الترتيب من هنا فقط.
//
// المتاح:
//
// creators
// youtube
// tiktok
// instagram
// kick
// twitch
// x
//
// ============================================


const ACCOUNT_ORDER = [

    "creators",

    "youtube",

    "tiktok",

    "instagram",

    "kick",

    "twitch",

    "x"

];



// ============================================
// تطبيق الترتيب
// ============================================

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
