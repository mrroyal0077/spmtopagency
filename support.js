/* ==========================================
   SPM AI - Support Module
========================================== */

import { db } from "./firebase.js";

import {

collection,
addDoc,
serverTimestamp

} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ==========================================
   Elements
========================================== */

const supportForm = document.getElementById("supportForm");

const supportStatus = document.getElementById("supportStatus");

/* ==========================================
   Save Support Ticket
========================================== */

async function createTicket(data) {

    try {

        await addDoc(

            collection(db, "support"),

            {

                ...data,

                status: "Pending",

                createdAt: serverTimestamp()

            }

        );

        showStatus(

            "Support ticket submitted successfully.",

            true

        );

        supportForm.reset();

    }

    catch (error) {

        console.error(error);

        showStatus(

            "Failed to submit support request.",

            false

        );

    }

}

/* ==========================================
   Form Submit
========================================== */

if (supportForm) {

    supportForm.addEventListener(

        "submit",

        async function(event) {

            event.preventDefault();

            const name = document.getElementById("supportName").value.trim();

            const email = document.getElementById("supportEmail").value.trim();

            const subject = document.getElementById("supportSubject").value.trim();

            const message = document.getElementById("supportMessage").value.trim();

            if (

                !name ||

                !email ||

                !subject ||

                !message

            ) {

                showStatus(

                    "Please fill all fields.",

                    false

                );

                return;

            }

            await createTicket({

                name,

                email,

                subject,

                message

            });

        }

    );

}

/* ==========================================
   Status Message
========================================== */

function showStatus(message, success) {

    if (!supportStatus) return;

    supportStatus.textContent = message;

    supportStatus.style.color =

        success

            ? "#00ff99"

            : "#ff5555";

}

/* ==========================================
   Contact Buttons
========================================== */

const whatsappSupport = document.getElementById("whatsappSupport");

whatsappSupport?.addEventListener(

    "click",

    () => {

        window.open(

            "https://wa.me/919329687975",

            "_blank"

        );

    }

);

const yoyoSupport = document.getElementById("yoyoSupport");

yoyoSupport?.addEventListener(

    "click",

    () => {

        window.open(

            "https://play.google.com/store/apps/details?id=com.fun.share",

            "_blank"

        );

    }

);

/* ==========================================
   Office Status
========================================== */

function updateOfficeStatus() {

    const office = document.getElementById("officeStatus");

    if (!office) return;

    const hour = new Date().getHours();

    if (

        hour >= 8 ||

        hour < 2

    ) {

        office.textContent =

            "🟢 Support Online";

    }

    else {

        office.textContent =

            "🔴 Support Offline";

    }

}

updateOfficeStatus();

setInterval(

    updateOfficeStatus,

    60000

);

console.log(

    "Support Module Loaded"

);
