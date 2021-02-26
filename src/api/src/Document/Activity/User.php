<?php

namespace App\Document\Activity;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @MongoDB\EmbeddedDocument
 */
class User
{
    /**
     * @var int
     *
     * @Assert\NotBlank()
     */
    private $id;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId($id): self
    {
        $this->id = $id;

        return $this;
    }
}
