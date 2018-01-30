package de.demo.jhipsterdemo.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import de.demo.jhipsterdemo.domain.enumeration.SctType;

/**
 * A Image.
 */
@Entity
@Table(name = "image")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Image implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "file_path")
    private String filePath;

    @Enumerated(EnumType.STRING)
    @Column(name = "jhi_type")
    private SctType type;

    @Column(name = "mandant_id")
    private String mandantId;

    @Column(name = "kunden_id")
    private String kundenId;

    @Column(name = "image_name")
    private String imageName;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilePath() {
        return filePath;
    }

    public Image filePath(String filePath) {
        this.filePath = filePath;
        return this;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public SctType getType() {
        return type;
    }

    public Image type(SctType type) {
        this.type = type;
        return this;
    }

    public void setType(SctType type) {
        this.type = type;
    }

    public String getMandantId() {
        return mandantId;
    }

    public Image mandantId(String mandantId) {
        this.mandantId = mandantId;
        return this;
    }

    public void setMandantId(String mandantId) {
        this.mandantId = mandantId;
    }

    public String getKundenId() {
        return kundenId;
    }

    public Image kundenId(String kundenId) {
        this.kundenId = kundenId;
        return this;
    }

    public void setKundenId(String kundenId) {
        this.kundenId = kundenId;
    }

    public String getImageName() {
        return imageName;
    }

    public Image imageName(String imageName) {
        this.imageName = imageName;
        return this;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Image image = (Image) o;
        if (image.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), image.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Image{" +
            "id=" + getId() +
            ", filePath='" + getFilePath() + "'" +
            ", type='" + getType() + "'" +
            ", mandantId='" + getMandantId() + "'" +
            ", kundenId='" + getKundenId() + "'" +
            ", imageName='" + getImageName() + "'" +
            "}";
    }
}
