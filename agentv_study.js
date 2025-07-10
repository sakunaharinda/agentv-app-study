document.addEventListener('DOMContentLoaded', function() {

    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');

    const stepsContainer = document.getElementById('steps-container');

    const doc1Btn = document.getElementById('doc1-btn');
    const doc2Btn = document.getElementById('doc2-btn');
    const doc1Check = document.getElementById('doc1-check');
    const doc2Check = document.getElementById('doc2-check');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const step4 = document.getElementById('step-4');
    const partnerBtn = document.getElementById('partner-btn');
    const qaBtn = document.getElementById('qa-btn');
    const satisBtn = document.getElementById('satis-btn');
    const backToStep1 = document.getElementById('back-to-step1');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const prolificIdInput = document.getElementById('prolificId');
    const submitBtn = document.getElementById('submitBtn');

    let prolific_pid = '';
    let task_link = 'https://auckland.au1.qualtrics.com/jfe/form/SV_b8AhSdVffEOdSIe?PROLIFIC_PID=';
    let sus_link = 'https://auckland.au1.qualtrics.com/jfe/form/SV_6DprC7G8FqPH4HA?PROLIFIC_PID=';
    
    let doc1Downloaded = false;
    let doc2Downloaded = false;

    document.getElementById('signin-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const prolificId = prolificIdInput.value.trim();
        
        // Generate the full URL with the Prolific ID as parameter
        prolific_pid = encodeURIComponent(prolificId);
        task_link = task_link + prolific_pid;
        sus_link = sus_link + prolific_pid;
        // Show and auto-hide success notification
        const notification = document.getElementById('successNotification');
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
        
        // Disable form elements
        
        submitBtn.disabled = true;
        submitBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
        submitBtn.innerHTML = '<span>Signed In!</span> <i class="fas fa-check ml-2"></i>';
        prolificIdInput.disabled = true;
        prolificIdInput.classList.add('bg-gray-100', 'cursor-not-allowed');

        section1.classList.remove('section-hidden');
        section1.classList.add('section-visible');

        section2.classList.remove('section-hidden');
        section2.classList.add('section-visible');

        section3.classList.remove('section-hidden');
        section3.classList.add('section-visible');

        section4.classList.remove('section-hidden');
        section4.classList.add('section-visible');

        stepsContainer.classList.remove('section-hidden');
        stepsContainer.classList.add('section-visible');
    });
    
    // Simulate document downloads
    doc1Btn.addEventListener('click', function() {
        if (!doc1Downloaded) {
            doc1Btn.disabled = true;
            doc1Btn.innerHTML = '<span>Downloading...</span><i class="fas fa-spinner fa-spin ml-2"></i>';
            
            // Create download link and trigger click
            const link = document.createElement('a');
            link.href = 'data/Requirements.md';
            link.download = 'Requirements.md';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            doc1Downloaded = true;
            doc1Check.classList.remove('hidden');
            doc1Btn.innerHTML = '<span>Downloaded</span><i class="fas fa-check ml-2"></i>';
            doc1Btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
            doc1Btn.classList.add('bg-gray-200', 'text-gray-600');
            checkStepCompletion();
        }
    });
    
    doc2Btn.addEventListener('click', function() {
        if (!doc2Downloaded) {
            doc2Btn.disabled = true;
            doc2Btn.innerHTML = '<span>Downloading...</span><i class="fas fa-spinner fa-spin ml-2"></i>';
            
            // Create download link and trigger click
            const link = document.createElement('a');
            link.href = 'data/Hierarchies.yaml';
            link.download = 'Hierarchies.yaml';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            doc2Downloaded = true;
            doc2Check.classList.remove('hidden');
            doc2Btn.innerHTML = '<span>Downloaded</span><i class="fas fa-check ml-2"></i>';
            doc2Btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
            doc2Btn.classList.add('bg-gray-200', 'text-gray-600');
            checkStepCompletion();
        }
    });
    
    // Check if both documents are downloaded
    function checkStepCompletion() {
        if (doc1Downloaded && doc2Downloaded) {
            // Update progress
            progressFill.style.width = '25%';
            progressPercentage.textContent = '25%';
            
            // Collapse step 1 and show step 2
            setTimeout(function() {
                step1.classList.add('collapsed');
                // step2.classList.remove('hidden');
                setTimeout(function() {
                    step2.classList.remove('collapsed');
                    // step2.classList.add('opacity-100', 'fade-in');
                    step2.scrollIntoView({ behavior: 'smooth' });
                    partnerBtn.classList.add('bg-green-500', 'hover:bg-green-600');
                }, 50);
            }, 500);
            step2.classList.remove('collapsed');
            partnerBtn.classList.remove('bg-gray-200', 'text-gray-600');
            partnerBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            partnerBtn.classList.remove('cursor-not-allowed')
            partnerBtn.disabled = false;

        }
    }
    
    // Partner registration button
    partnerBtn.addEventListener('click', function() {
        window.open('http://agentv.naoinstitute.cloud.edu.au:8506/', '_blank');
        
        // Simulate completion of step 2
        setTimeout(function() {
            progressFill.style.width = '50%';
            progressPercentage.textContent = '50%';
            step2.classList.add('collapsed')
            
        }, 500);
        step3.classList.remove('collapsed');
        qaBtn.classList.remove('bg-gray-200', 'text-gray-600');
        qaBtn.classList.add('bg-indigo-500', 'hover:bg-indigo-600');
        qaBtn.classList.remove('cursor-not-allowed')
        qaBtn.disabled = false;
    });

    qaBtn.addEventListener('click', function() {



        window.open(task_link, '_blank');
        
        // Simulate completion of step 2
        setTimeout(function() {
            progressFill.style.width = '75%';
            progressPercentage.textContent = '75%';
            
            step3.classList.add('collapsed')
            
        }, 500);
        step4.classList.remove('collapsed');
        satisBtn.classList.remove('bg-gray-200', 'text-gray-600');
        satisBtn.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
        satisBtn.classList.remove('cursor-not-allowed')
        satisBtn.disabled = false;
    });

    satisBtn.addEventListener('click', function() {
        window.open(sus_link, '_blank');
        
        // Simulate completion of step 2
        setTimeout(function() {
            progressFill.style.width = '100%';
            progressPercentage.textContent = '100%';
            
            step4.classList.add('collapsed')
            
        }, 500);
    });

    // Make steps collapsible/expandable
    const stepHeaders = document.querySelectorAll('.step h2');
    stepHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const step = this.closest('.step');
            if (step.classList.contains('collapsed')) {
                step.classList.remove('collapsed');
            } else if (!step.classList.contains('hidden')) {
                step.classList.add('collapsed');
            }
            step.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    prolificIdInput.addEventListener('focus', function() {
        this.classList.add('ring-2', 'ring-blue-300');
    });
    
    prolificIdInput.addEventListener('blur', function() {
        this.classList.remove('ring-2', 'ring-blue-300');
    });

});
