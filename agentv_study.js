document.addEventListener('DOMContentLoaded', function() {
    const doc1Btn = document.getElementById('doc1-btn');
    const doc2Btn = document.getElementById('doc2-btn');
    const doc1Check = document.getElementById('doc1-check');
    const doc2Check = document.getElementById('doc2-check');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const partnerBtn = document.getElementById('partner-btn');
    const backToStep1 = document.getElementById('back-to-step1');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    let doc1Downloaded = false;
    let doc2Downloaded = false;
    
    // Simulate document downloads
    doc1Btn.addEventListener('click', function() {
        if (!doc1Downloaded) {
            doc1Btn.disabled = true;
            doc1Btn.innerHTML = '<span>Downloading...</span><i class="fas fa-spinner fa-spin ml-2"></i>';
            
            // Create download link and trigger click
            const link = document.createElement('a');
            link.href = 'data/Hospital.md';
            link.download = 'Hospital.md';
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
            link.href = 'data/hierarchy.yaml';
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
            progressFill.style.width = '50%';
            progressPercentage.textContent = '50%';
            
            // Collapse step 1 and show step 2
            setTimeout(function() {
                step1.classList.add('collapsed');
                step2.classList.remove('hidden');
                setTimeout(function() {
                    step2.classList.add('opacity-100', 'fade-in');
                    step2.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            }, 500);
        }
    }
    
    // Partner registration button
    partnerBtn.addEventListener('click', function() {
        window.open('https://www.google.com', '_blank');
        
        // Simulate completion of step 2
        setTimeout(function() {
            progressFill.style.width = '100%';
            progressPercentage.textContent = '100%';
            partnerBtn.innerHTML = '<span>Registration Complete</span><i class="fas fa-check ml-2"></i>';
            partnerBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
            partnerBtn.classList.add('bg-gray-200', 'text-gray-600');
            partnerBtn.disabled = true;
        }, 2000);
    });
    
    // Back to step 1 button
    backToStep1.addEventListener('click', function() {
        step1.classList.remove('collapsed');
        step2.classList.remove('opacity-100');
        setTimeout(function() {
            step2.classList.add('hidden');
            step1.scrollIntoView({ behavior: 'smooth' });
        }, 300);
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
});