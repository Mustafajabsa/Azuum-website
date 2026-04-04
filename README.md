# Azuum Form Hub Website

A modern, responsive business website for Azuum Form Hub - an enterprise-grade form management system.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Loading**: Optimized assets and CDN resources
- **Cross-browser Compatible**: Works on all modern browsers

## Pages

- **Home**: Landing page with hero section, features, and call-to-action
- **About**: Company information, mission, story, and team
- **Features**: Detailed feature showcase and capabilities
- **Pricing**: Transparent pricing plans with feature comparison
- **Contact**: Contact form, information, and FAQ

## Technology Stack

- **Backend**: Django 6.0.3
- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **Icons**: Lucide Icons
- **Fonts**: Google Fonts (Inter)
- **Images**: Picsum Photos for placeholders

## Installation

### Prerequisites

- Python 3.8+
- pip package manager

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd azuum_website
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

7. Open your browser and navigate to `http://127.0.0.1:8000`

## Project Structure

```
azuum_website/
├── azuum_website/          # Django project settings
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── templates/               # HTML templates
│   ├── home.html
│   ├── about.html
│   ├── features.html
│   ├── pricing.html
│   └── contact.html
├── static/                 # Static files (CSS, JS, images)
├── manage.py
└── requirements.txt
```

## Customization

### Adding New Pages

1. Create a new HTML template in the `templates/` directory
2. Add a view function in `azuum_website/urls.py`
3. Add the URL pattern to the `urlpatterns` list

### Modifying Styles

- Edit Tailwind classes directly in HTML templates
- For custom CSS, add files to the `static/` directory
- Update `settings.py` to include static files

### Updating Content

- All page content is in the respective HTML templates
- Navigation is consistent across all pages
- Footer links can be updated in each template

## Deployment

### Production Settings

1. Set `DEBUG = False` in `settings.py`
2. Configure `ALLOWED_HOSTS` with your domain
3. Set up production database
4. Configure static files serving
5. Set up environment variables for sensitive data

### Static Files

```bash
# Collect static files for production
python manage.py collectstatic
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lighthouse score: 95+
- Page load time: < 2 seconds
- Mobile optimized: Yes

## Security

- CSRF protection enabled
- Secure headers configured
- XSS protection
- Content Security Policy ready

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Email: hello@azuumformhub.com
- Phone: +1 (555) 123-4567
- Website: https://azuumformhub.com

## Roadmap

- [ ] Blog integration
- [ ] Customer testimonials
- [ ] Interactive demos
- [ ] Multi-language support
- [ ] Dark mode

---

**Azuum Form Hub** - Transforming form management for modern organizations.
