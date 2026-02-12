export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seosmic - Digital Marketing Consulting</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            color: white;
        }
        
        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .booking-section {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        .service-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .service-card {
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .service-card:hover {
            border-color: #667eea;
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
        }
        
        .service-card.selected {
            border-color: #667eea;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        
        .service-card .duration {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 15px;
        }
        
        .service-card.selected .duration {
            color: rgba(255,255,255,0.9);
        }
        
        .service-card p {
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .booking-form {
            display: none;
        }
        
        .booking-form.active {
            display: block;
        }
        
        .form-group {
            margin-bottom: 25px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .datetime-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
            width: 100%;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        .back-btn {
            background: #6c757d;
            margin-bottom: 20px;
            width: auto;
            padding: 10px 20px;
            font-size: 0.9rem;
        }
        
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .booking-section {
                padding: 25px;
            }
            
            .datetime-group {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Seosmic</h1>
            <p>Digital Marketing Consulting</p>
        </div>
        
        <div class="booking-section">
            <div id="service-selection">
                <h2 style="text-align: center; margin-bottom: 30px; color: #333;">Choose Your Service</h2>
                
                <div class="service-cards">
                    <div class="service-card" onclick="selectService('discovery')">
                        <h3>Discovery Call</h3>
                        <div class="duration">30 Minutes</div>
                        <p>Perfect for understanding your current digital marketing challenges and exploring how we can help grow your business.</p>
                    </div>
                    
                    <div class="service-card" onclick="selectService('strategy')">
                        <h3>Strategy Session</h3>
                        <div class="duration">1 Hour</div>
                        <p>Deep dive into your marketing goals with a comprehensive strategy discussion and actionable recommendations.</p>
                    </div>
                </div>
            </div>
            
            <div id="booking-form" class="booking-form">
                <button class="btn back-btn" onclick="goBack()">← Back to Services</button>
                
                <h2 style="text-align: center; margin-bottom: 30px; color: #333;" id="form-title">Book Your Appointment</h2>
                
                <form onsubmit="submitBooking(event)">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="company">Company Name</label>
                        <input type="text" id="company" name="company">
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    
                    <div class="datetime-group">
                        <div class="form-group">
                            <label for="date">Preferred Date *</label>
                            <input type="date" id="date" name="date" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="time">Preferred Time *</label>
                            <select id="time" name="time" required>
                                <option value="">Select time</option>
                                <option value="09:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Tell us about your marketing goals (optional)</label>
                        <textarea id="message" name="message" rows="4" placeholder="What challenges are you facing? What are you hoping to achieve?"></textarea>
                    </div>
                    
                    <button type="submit" class="btn">Book Appointment</button>
                </form>
            </div>
        </div>
    </div>
    
    <script>
        let selectedService = '';
        
        // Set minimum date to today
        document.getElementById('date').min = new Date().toISOString().split('T')[0];
        
        function selectService(service) {
            selectedService = service;
            
            // Update form title
            const title = service === 'discovery' ? 'Book Your Discovery Call (30 min)' : 'Book Your Strategy Session (1 hour)';
            document.getElementById('form-title').textContent = title;
            
            // Show form, hide service selection
            document.getElementById('service-selection').style.display = 'none';
            document.getElementById('booking-form').classList.add('active');
        }
        
        function goBack() {
            document.getElementById('service-selection').style.display = 'block';
            document.getElementById('booking-form').classList.remove('active');
            
            // Clear selection
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.remove('selected');
            });
        }
        
        function submitBooking(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            data.service = selectedService;
            
            // In a real implementation, you'd send this to your backend
            alert(\`Thank you \${data.name}! Your \${selectedService === 'discovery' ? 'Discovery Call' : 'Strategy Session'} request for \${data.date} at \${data.time} has been received. We'll contact you within 24 hours to confirm.\`);
            
            // Reset form
            event.target.reset();
            goBack();
        }
        
        // Add click effects to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    </script>
</body>
</html>` }} />
  );
}